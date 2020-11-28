import React, { useState, useEffect } from "react";

export default function Products() {
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
    for (let r = 32; r > 0; r--)
      for (let g = 32; g > 0; g--)
        for (let b = 32; b > 0; b--) {
          setColorArray((colorArray) => [
            ...colorArray,
            { r: r * 8 - 1, g: g * 8 - 1, b: b * 8 - 1 },
          ]);
        }
  }, []);
  return (
    <div>
      <div className="input-color">
        {colorArray.length > 0 ? (
          <div>
            {[...Array(256)].map((x, column) => (
              <div className="color-box">
                {[...Array(128)].map((y, row) => (
                  <div
                    className="color-box"
                    style={{
                      backgroundColor:
                        "rgb(" +
                        colorArray[(row + 1) * (column + 1) - 1].r +
                        ", " +
                        colorArray[(row + 1) * (column + 1) - 1].g +
                        ", " +
                        colorArray[(row + 1) * (column + 1) - 1].b +
                        ")",
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div>Please wait while we compute the image</div>
        )}
      </div>
    </div>
  );
}
