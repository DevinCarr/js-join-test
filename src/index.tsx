import './index.css';

interface TestObject {
    id1: string;
    id2: string;
    id3: number;
    entry1: string;
    entry2: string;
    entry3: number;
};

interface JoinObject {
    hash: string;
    entry11: string;
    entry12: string;
    entry13: number;
    entry21: string;
    entry22: string;
    entry23: number;
}

const createTestObjects = (): [TestObject[], TestObject[]] => {
    const o1: TestObject[] = [];
    const o2: TestObject[] = [];
    for (let i = 0; i < 1000000; i++) {
        o1.push({
            id1: i.toString(),
            id2: (i + 1).toString(),
            id3: i + 2,
            entry1: (i + 4).toString(),
            entry2: (i + 3).toString(),
            entry3: i
        } as TestObject);
        o2.push({
            id1: i.toString(),
            id2: (i + 1).toString(),
            id3: i + 2,
            entry1: (i + 3).toString(),
            entry2: (i + 4).toString(),
            entry3: i
        } as TestObject);
    }
    return [o1, o2];
}

const hash = (o: TestObject): string => {
    return o.id1 + "|" + o.id2 + "|" + o.id3;
}

const joinByIndex = (o1: TestObject[], o2: TestObject[]): JoinObject[] => {
    const index = new Map<string, number>();
    // insert elements into the index 
    o1.forEach(function addToIndex(o, i) { index.set(hash(o), i); });
    return o2.map(function fetchFromIndex(obj2) {
        const h = hash(obj2);
        const obj1 = o1[index.get(h)!];
        return {
            hash: h,
            entry11: obj1.entry1,
            entry12: obj1.entry2,
            entry13: obj1.entry3,
            entry21: obj2.entry1,
            entry22: obj2.entry2,
            entry23: obj2.entry3
        } as JoinObject;
    });
}

const joinByRef = (o1: TestObject[], o2: TestObject[]): JoinObject[] => {
    const index = new Map<string, TestObject>();
    // insert elements into the index 
    o1.forEach(function addToIndex(o) { index.set(hash(o), o); });
    return o2.map(function fetchFromRef(obj2) {
        const h = hash(obj2);
        const obj1 = index.get(h)!;
        return {
            hash: h,
            entry11: obj1.entry1,
            entry12: obj1.entry2,
            entry13: obj1.entry3,
            entry21: obj2.entry1,
            entry22: obj2.entry2,
            entry23: obj2.entry3
        } as JoinObject;
    });
}

const [objs1, objs2] = createTestObjects();
console.profile("joinByIndex");
const resultByIndex = joinByIndex(objs1, objs2);
console.profileEnd("joinByIndex");
resultByIndex.forEach(jo => {
    if (jo.entry13 !== jo.entry23) {
        throw { message: `Invalid mapping (joinByIndex): ${jo.hash}`, name: "Invalid Join" } as Error;
    }
});

console.profile("joinByRef");
const resultByRef = joinByRef(objs1, objs2);
console.profileEnd("joinByRef");
resultByRef.forEach(jo => {
    if (jo.entry13 !== jo.entry23) {
        throw { message: `Invalid mapping (joinByRef): ${jo.hash}`, name: "Invalid Join" } as Error;
    }
});