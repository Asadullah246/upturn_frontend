

export const getSorted=(data)=>{

    const sortedData = data.sort((a, b) => {
        if (a.serial !== undefined && b.serial !== undefined) {
          return a.serial - b.serial; // Sort by serial if both objects have it
        } else if (a.serial !== undefined) {
          return -1; // `a` has serial, `b` doesn't, `a` should come first
        } else if (b.serial !== undefined) {
          return 1; // `b` has serial, `a` doesn't, `b` should come first
        } else {
          return 0; // Both don't have serial, maintain original order
        }
      });

      return sortedData; 


}
