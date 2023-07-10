
const data = {
    key1: "key1_value",
    key2: "key2_value",
    key3: {
        key3_depth1_1: "key3_depth1_1_value",
        key3_depth1_2: "key3_depth1_2_value",
        key3_depth1_3: "key3_depth1_3_value",
        key3_depth1_4: [
            {key3_depth1_4_arr1: "key3_depth1_4_arr1_value"},
            {key3_depth1_4_arr2: "key3_depth1_4_arr2_value"},
            {key3_depth1_4_arr3: "key3_depth1_4_arr3_value"},
            {key3_depth1_4_arr4: "key3_depth1_4_arr4_value"}
        ],
        key3_depth1_5: "key3_depth1_5_value",
        key3_depth1_6: "key3_depth1_6_value",
        key3_depth1_7: [1,2,3,4,5,6,7,8,9,10]
    },
    key4: "key4_value",
    key5: "key5_value",
    key6: ["key6_arr1_1_value", "key6_arr1_2_value", "key6_arr1_3_value", "key6_arr1_4_value"],
    key7: "key7_value",
    key8: "key8_value",
    key9: "key9_value",
    key10: "key10_value"
}

let TraverseFilter;
(function (TraverseFilter) {
    TraverseFilter["end"] = "end";
})(TraverseFilter || (TraverseFilter = {}));

const traverse = function* (o) {

    console.log("OUTER");
    const memSet = new Set();
    const innerTraversal = function* (root) {

        const queue = [];
        console.log("INNER");
        queue.push([root, []]);
        while (queue.length > 0) {
            
            console.log("INNER WHILE");
            const [o, path] = queue.shift();
            if (memSet.has(o)) {
                continue;
            }
            memSet.add(o);

            for (let i of Object.keys(o)) {
                const item = o[i];
                const itemPath = path.concat([i]);
                const filter = yield [i, item, itemPath, o];

                if (filter === TraverseFilter.end) {
                    continue;
                }

                // Null 우선 체크
                if (item !== null && typeof item === "object") {
                    queue.push([item, itemPath]);
                }
            }
        }
    }

    yield* innerTraversal(o);
} 

let traverseObj = data;
traverseObj.o = traverseObj;

for (const [key, value, path, parent] of traverse(traverseObj)) {
            
    // console.log(key, value);
}
