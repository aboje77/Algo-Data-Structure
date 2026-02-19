
function dot_product_procedure(v1, v2, ps) {
    ps.value = 0;  // Initialize
    
    for (let i = 0; i < v1.length; i++) {
        ps.value += v1[i] * v2[i];
    }
    // Result is stored in ps.value (pass-by-reference)
}



function checkOrthogonal_Procedure(vectorPairs) {
    console.log("\n========== APPROACH 1: Using PROCEDURE (Pass-by-Reference) ==========\n");
    
    for (let i = 0; i < vectorPairs.length; i++) {
        const v1 = vectorPairs[i].v1;
        const v2 = vectorPairs[i].v2;
        
        // Create reference parameter object
        const ps = {};
        
        // Call procedure - ps is passed by reference
        dot_product_procedure(v1, v2, ps);
        
        // Display results
        console.log(`Pair ${i + 1}:`);
        console.log(`  Vector 1: [${v1.join(", ")}]`);
        console.log(`  Vector 2: [${v2.join(", ")}]`);
        console.log(`  Dot Product: ${ps.value}`);
        
        if (ps.value === 0) {
            console.log(`  Result: YES - Vectors are ORTHOGONAL ✓`);
        } else {
            console.log(`  Result: NO - Vectors are NOT orthogonal`);
        }
        console.log();
    }
}


