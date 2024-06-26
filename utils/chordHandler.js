
function activeNodeChordHandler(activeNodes){
    if (activeNodes.length === 1){
        return activeNodes[0].basePCSet;
    }
    else if (activeNodes.length === 2){
        if (Math.abs(activeNodes[0].index - activeNodes[1].index) === 1){
            // Logic for chord with adjacent notes pressed -- SECONDARY DOMINANTS (V/x)
            let tonicIndex = (activeNodes[0].index > activeNodes[1].index ? 0 : 1);

            const adjustedPCSet = [...activeNodes[tonicIndex].basePCSet];
            for (i = 0; i < activeNodes[tonicIndex].quality; i++){
                adjustedPCSet[i+1]++;
            }
            console.log(adjustedPCSet, activeNodes[tonicIndex].quality);
            return adjustedPCSet;

    }
    else if (Math.abs(activeNodes[0].index - activeNodes[1].index) === 2){
        let tonicIndex = (activeNodes[0].index > activeNodes[1].index ? 0 : 1);

        const adjustedPCSet = [...activeNodes[tonicIndex].basePCSet];

        for (i = 0; i < activeNodes[tonicIndex].quality; i++){
            adjustedPCSet[i+1]++;
        }
        adjustedPCSet.push((adjustedPCSet[0]+10)%12);
        console.log(adjustedPCSet);
        return adjustedPCSet;
    }
    else if (Math.abs(activeNodes[0].index - activeNodes[1].index) === 10){
        let tonicIndex = (activeNodes[0].index > activeNodes[1].index ? 1 : 0);

        const adjustedPCSet = [...activeNodes[tonicIndex].basePCSet];
        adjustedPCSet[1] += activeNodes[tonicIndex].quality;
        adjustedPCSet.push((adjustedPCSet[0]+10)%12);
        console.log(adjustedPCSet);
        return adjustedPCSet;
    }
    else {return activeNodes[0].basePCSet;}
}
    else{return [];}
  
}