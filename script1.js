

function sumOfDistinctElements(set1, set2) {
    let sum = 0;
    let found = false;
    
    // Step 1: Check each element of set1 that is NOT in set2
    for (let i = 0; i < set1.length; i++) {
        found = false;
        
        // Search for set1[i] in set2
        for (let j = 0; j < set2.length; j++) {
            if (set1[i] === set2[j]) {
                found = true;
                break;  // Element found, stop searching
            }
        }
        
        // If element not found in set2, add to sum
        if (!found) {
            sum += set1[i];
        }
    }
    
    // Step 2: Check each element of set2 that is NOT in set1
    for (let i = 0; i < set2.length; i++) {
        found = false;
        
        // Search for set2[i] in set1
        for (let j = 0; j < set1.length; j++) {
            if (set2[i] === set1[j]) {
                found = true;
                break;  // Element found, stop searching
            }
        }
        
        // If element not found in set1, add to sum
        if (!found) {
            sum += set2[i];
        }
    }
    
    return sum;
}


/**
 * Helper function: Get the distinct elements (for display purposes)
 */
function getDistinctElements(set1, set2) {
    let distinct = [];
    
    // Get elements from set1 not in set2
    for (let i = 0; i < set1.length; i++) {
        let found = false;
        for (let j = 0; j < set2.length; j++) {
            if (set1[i] === set2[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            distinct.push(set1[i]);
        }
    }
    
    // Get elements from set2 not in set1
    for (let i = 0; i < set2.length; i++) {
        let found = false;
        for (let j = 0; j < set1.length; j++) {
            if (set2[i] === set1[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            distinct.push(set2[i]);
        }
    }
    
    return distinct;
}


// ============================================================================
// TEST CASES
// ============================================================================

console.log("====== PROBLEM: SUM OF DISTINCT ELEMENTS FROM TWO SETS ======\n");

// Example from problem statement
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

console.log("Set 1: " + JSON.stringify(set1));
console.log("Set 2: " + JSON.stringify(set2));

const result = sumOfDistinctElements(set1, set2);
const distinctElements = getDistinctElements(set1, set2);

console.log("\nDistinct elements (in one set only): " + JSON.stringify(distinctElements));
console.log("Sum of distinct elements: " + result);
console.log("Expected output: 13 ✓\n");


