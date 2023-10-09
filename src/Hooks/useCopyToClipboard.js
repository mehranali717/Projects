import React, { useState, useEffect, useCallback} from "react";
import copy from "copy-to-clipboard";
const useCopyToClipboard =()=>{
const [isCopied, setCopied] = useState(false);
    const handleCopy = useCallback((text)=>{
        if (typeof text ==="string" || typeof text == "number")
        {
            copy(text.toString());
            setCopied(true);
        }
        else {
            setCopied(false);
            console.error(`Cannot copy type of ${typeof text} to clipboard, must be stringnor number.`
            );
        }
    },[]);
    useEffect(() => {
        let timeout;
        if (isCopied) {
          timeout = setTimeout(() => setCopied(false), 1000);
        }
      }, [isCopied]);
    return [isCopied, handleCopy];
}
export default useCopyToClipboard;