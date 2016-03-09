var bookmarks = [{"id":"14_2","data":"Movies","specs":[
  {"mark":"bar","encoding":{"x":{"field":"*","type":"quantitative","aggregate":"count"},"y":{"field":"Title","type":"ordinal"}},"distance":0,"prev":[]},
  {"mark":"line","encoding":{"x":{"field":"Release_Date","type":"temporal","timeUnit":"year"},"y":{"field":"*","type":"quantitative","aggregate":"count"}},"distance":0,"prev":[]},
  {"mark":"bar","encoding":{"x":{"field":"Rotten_Tomatoes_Rating","type":"quantitative","bin":true},"y":{"field":"*","type":"quantitative","aggregate":"count"}},"distance":0,"prev":[]},
  {"mark":"bar","encoding":{"x":{"field":"IMDB_Rating","type":"quantitative","bin":true},"y":{"field":"*","type":"quantitative","aggregate":"count"}},"distance":0,"prev":[]},
  {"mark":"point","encoding":{"x":{"field":"Distributor","type":"ordinal"},"y":{"field":"Major_Genre","type":"ordinal"},"size":{"field":"*","type":"quantitative","aggregate":"count"}},"distance":0,"prev":[]},
  {"mark":"bar","encoding":{"x":{"aggregate":"mean","field":"US_Gross","type":"quantitative"},"y":{"field":"Major_Genre","type":"ordinal"}},"distance":0,"prev":[]},
  {"mark":"bar","encoding":{"x":{"aggregate":"mean","field":"US_DVD_Sales","type":"quantitative"},"y":{"field":"Major_Genre","type":"ordinal"}},"distance":0,"prev":[]},
  {"mark":"bar","encoding":{"x":{"field":"*","type":"quantitative","aggregate":"count"},"y":{"field":"Director","type":"ordinal"}},"distance":0,"prev":[]},
  {"mark":"point","encoding":{"x":{"field":"Director","type":"ordinal"},"y":{"field":"Major_Genre","type":"ordinal"},"size":{"field":"*","type":"quantitative","aggregate":"count"}},"distance":0,"prev":[]},
  {"mark":"bar","encoding":{"x":{"aggregate":"mean","field":"Worldwide_Gross","type":"quantitative"},"y":{"field":"Major_Genre","type":"ordinal"}},"distance":0,"prev":[]},
  {"mark":"bar","encoding":{"x":{"field":"IMDB_Rating","type":"quantitative","bin":true},"y":{"aggregate":"mean","field":"Worldwide_Gross","type":"quantitative"}},"distance":0,"prev":[]},
  {"mark":"bar","encoding":{"x":{"field":"Production_Budget","type":"quantitative","bin":true},"y":{"aggregate":"mean","field":"Worldwide_Gross","type":"quantitative"}},"distance":0,"prev":[]},
  {"mark":"point","encoding":{"x":{"field":"Release_Date","type":"temporal","timeUnit":"year"},"y":{"field":"Distributor","type":"ordinal"},"size":{"field":"*","type":"quantitative","aggregate":"count"}},"distance":0,"prev":[]},
  {"mark":"point","encoding":{"x":{"field":"Release_Date","type":"temporal","timeUnit":"year"},"y":{"field":"Director","type":"ordinal"},"size":{"field":"*","type":"quantitative","aggregate":"count"}}}],"transitionSets":[[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[{"name":"BAR_LINE","cost":0.04}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"},{"type":"added","channel":"y"}]}],"encoding":[{"name":"SWAP_X_Y","cost":3.77},{"name":"MODIFY_X","cost":4.17}],"cost":8.620000000000001},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"},{"type":"added","channel":"y"}]},{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"SWAP_X_Y","cost":3.77},{"name":"MODIFY_X","cost":4.17}],"cost":9.2},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"},{"type":"added","channel":"y"}]},{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"SWAP_X_Y","cost":3.77},{"name":"MODIFY_X","cost":4.17}],"cost":9.2},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_X_SIZE","cost":4},{"name":"ADD_X","cost":3.97},{"name":"MODIFY_Y","cost":4.17}],"cost":12.8},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"}]}],"encoding":[{"name":"MODIFY_X_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_Y","cost":4.17}],"cost":8.96},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"}]}],"encoding":[{"name":"MODIFY_X_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_Y","cost":4.17}],"cost":8.96},{"marktype":[],"transform":[],"encoding":[{"name":"MODIFY_Y","cost":4.17}],"cost":4.17},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_X_SIZE","cost":4},{"name":"ADD_X","cost":3.97},{"name":"MODIFY_Y","cost":4.17}],"cost":12.8},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"}]}],"encoding":[{"name":"MODIFY_X_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_Y","cost":4.17}],"cost":8.96},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"}]},{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"MODIFY_X_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_Y","cost":4.17}],"cost":9.58},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"}]},{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"MODIFY_X_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_Y","cost":4.17}],"cost":9.58},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_X_SIZE","cost":4},{"name":"ADD_X","cost":3.97},{"name":"MODIFY_Y","cost":4.17}],"cost":12.8},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_X_SIZE","cost":4},{"name":"ADD_X","cost":3.97},{"name":"MODIFY_Y","cost":4.17}],"cost":12.8}],[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[{"name":"BAR_LINE","cost":0.04}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"MODIFY_X","cost":4.17}],"cost":4.83},{"marktype":[{"name":"BAR_LINE","cost":0.04}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"MODIFY_X","cost":4.17}],"cost":4.83},{"marktype":[{"name":"LINE_POINT","cost":0.03}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97},{"name":"MODIFY_X","cost":4.17}],"cost":12.81},{"marktype":[{"name":"BAR_LINE","cost":0.04}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":9},{"marktype":[{"name":"BAR_LINE","cost":0.04}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":9},{"marktype":[{"name":"BAR_LINE","cost":0.04}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"x"},{"type":"removed","channel":"y"}]}],"encoding":[{"name":"SWAP_X_Y","cost":3.77},{"name":"MODIFY_Y","cost":4.17}],"cost":8.620000000000001},{"marktype":[{"name":"LINE_POINT","cost":0.03}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97},{"name":"MODIFY_X","cost":4.17}],"cost":12.81},{"marktype":[{"name":"BAR_LINE","cost":0.04}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":9},{"marktype":[{"name":"BAR_LINE","cost":0.04}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":9.620000000000001},{"marktype":[{"name":"BAR_LINE","cost":0.04}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":9.620000000000001},{"marktype":[{"name":"LINE_POINT","cost":0.03}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97}],"cost":8.64},{"marktype":[{"name":"LINE_POINT","cost":0.03}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97}],"cost":8.64}],[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[],"transform":[],"encoding":[{"name":"MODIFY_X","cost":4.17}],"cost":4.17},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97},{"name":"MODIFY_X","cost":4.17}],"cost":13.42},{"marktype":[],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":9.58},{"marktype":[],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":9.58},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"x"},{"type":"removed","channel":"y"}]},{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]}],"encoding":[{"name":"SWAP_X_Y","cost":3.77},{"name":"MODIFY_Y","cost":4.17}],"cost":9.2},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97},{"name":"MODIFY_X","cost":4.17}],"cost":13.42},{"marktype":[],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":9.58},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":8.96},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":8.96},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97},{"name":"MODIFY_X","cost":4.17}],"cost":13.42},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97},{"name":"MODIFY_X","cost":4.17}],"cost":13.42}],[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97},{"name":"MODIFY_X","cost":4.17}],"cost":13.42},{"marktype":[],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":9.58},{"marktype":[],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":9.58},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"x"},{"type":"removed","channel":"y"}]},{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]}],"encoding":[{"name":"SWAP_X_Y","cost":3.77},{"name":"MODIFY_Y","cost":4.17}],"cost":9.2},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97},{"name":"MODIFY_X","cost":4.17}],"cost":13.42},{"marktype":[],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":9.58},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15}],"cost":4.79},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"}]}],"encoding":[{"name":"MODIFY_Y_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_X","cost":4.17}],"cost":8.96},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97},{"name":"MODIFY_X","cost":4.17}],"cost":13.42},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"y"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97},{"name":"MODIFY_X","cost":4.17}],"cost":13.42}],[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"size"}]}],"encoding":[{"name":"REMOVE_SIZE_COUNT","cost":3.8},{"name":"MODIFY_X","cost":4.17}],"cost":8.629999999999999},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"size"}]}],"encoding":[{"name":"REMOVE_SIZE_COUNT","cost":3.8},{"name":"MODIFY_X","cost":4.17}],"cost":8.629999999999999},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"x"},{"type":"removed","channel":"size"}]}],"encoding":[{"name":"REMOVE_X","cost":3.87},{"name":"MODIFY_X_ADD_COUNT","cost":4.16},{"name":"MODIFY_Y","cost":4.17}],"cost":12.860000000000001},{"marktype":[],"transform":[],"encoding":[{"name":"MODIFY_X","cost":4.17}],"cost":4.17},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"size"}]}],"encoding":[{"name":"REMOVE_SIZE_COUNT","cost":3.8},{"name":"MODIFY_X","cost":4.17}],"cost":8.629999999999999},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"size"}]}],"encoding":[{"name":"REMOVE_SIZE_COUNT","cost":3.8},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":13.42},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"size"}]}],"encoding":[{"name":"REMOVE_SIZE_COUNT","cost":3.8},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":13.42},{"marktype":[],"transform":[],"encoding":[{"name":"SWAP_X_Y","cost":3.77},{"name":"MODIFY_X","cost":4.17}],"cost":7.9399999999999995},{"marktype":[],"transform":[],"encoding":[{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":8.34}],[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[],"transform":[],"encoding":[{"name":"MODIFY_X","cost":4.17}],"cost":4.17},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"MODIFY_X_ADD_COUNT","cost":4.16},{"name":"MODIFY_Y","cost":4.17}],"cost":8.969999999999999},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"size"}]}],"encoding":[{"name":"ADD_SIZE_COUNT","cost":3.9},{"name":"MODIFY_X","cost":4.17}],"cost":8.73},{"marktype":[],"transform":[],"encoding":[{"name":"MODIFY_X","cost":4.17}],"cost":4.17},{"marktype":[],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":8.96},{"marktype":[],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":8.96},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"size"}]}],"encoding":[{"name":"ADD_SIZE_COUNT","cost":3.9},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":12.9},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"size"}]}],"encoding":[{"name":"ADD_SIZE_COUNT","cost":3.9},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":12.9}],[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"MODIFY_X_ADD_COUNT","cost":4.16},{"name":"MODIFY_Y","cost":4.17}],"cost":8.969999999999999},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"size"}]}],"encoding":[{"name":"ADD_SIZE_COUNT","cost":3.9},{"name":"MODIFY_X","cost":4.17}],"cost":8.73},{"marktype":[],"transform":[],"encoding":[{"name":"MODIFY_X","cost":4.17}],"cost":4.17},{"marktype":[],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":8.96},{"marktype":[],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":8.96},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"size"}]}],"encoding":[{"name":"ADD_SIZE_COUNT","cost":3.9},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":12.9},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"size"}]}],"encoding":[{"name":"ADD_SIZE_COUNT","cost":3.9},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":12.9}],[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"SWAP_X_Y","cost":3.77},{"name":"MOVE_Y_SIZE","cost":4},{"name":"ADD_Y","cost":3.97}],"cost":12.4},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"}]}],"encoding":[{"name":"MODIFY_X_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_Y","cost":4.17}],"cost":8.96},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"}]},{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"MODIFY_X_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_Y","cost":4.17}],"cost":9.58},{"marktype":[],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"}]},{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"MODIFY_X_REMOVE_COUNT","cost":4.15},{"name":"MODIFY_Y","cost":4.17}],"cost":9.58},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_X_SIZE","cost":4},{"name":"ADD_X","cost":3.97},{"name":"MODIFY_Y","cost":4.17}],"cost":12.8},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"x"},{"type":"added","channel":"size"}]}],"encoding":[{"name":"MOVE_X_SIZE","cost":4},{"name":"ADD_X","cost":3.97}],"cost":8.63}],[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"size"}]}],"encoding":[{"name":"REMOVE_SIZE_COUNT","cost":3.8},{"name":"MODIFY_X","cost":4.17}],"cost":8.629999999999999},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"size"}]}],"encoding":[{"name":"REMOVE_SIZE_COUNT","cost":3.8},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":13.42},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"removed","channel":"size"}]}],"encoding":[{"name":"REMOVE_SIZE_COUNT","cost":3.8},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":13.42},{"marktype":[],"transform":[],"encoding":[{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":8.34},{"marktype":[],"transform":[],"encoding":[{"name":"SWAP_X_Y","cost":3.77},{"name":"MODIFY_X","cost":4.17}],"cost":7.9399999999999995}],[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"SWAP_X_Y","cost":3.77},{"name":"MODIFY_X","cost":4.17}],"cost":8.559999999999999},{"marktype":[],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"added","channel":"x"}]}],"encoding":[{"name":"SWAP_X_Y","cost":3.77},{"name":"MODIFY_X","cost":4.17}],"cost":8.559999999999999},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"size"}]}],"encoding":[{"name":"ADD_SIZE_COUNT","cost":3.9},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":12.9},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"size"}]}],"encoding":[{"name":"ADD_SIZE_COUNT","cost":3.9},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":12.9}],[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[],"transform":[],"encoding":[{"name":"MODIFY_X","cost":4.17}],"cost":4.17},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"size"}]}],"encoding":[{"name":"ADD_SIZE_COUNT","cost":3.9},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":13.52},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"size"}]}],"encoding":[{"name":"ADD_SIZE_COUNT","cost":3.9},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":13.52}],[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"size"}]}],"encoding":[{"name":"ADD_SIZE_COUNT","cost":3.9},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":13.52},{"marktype":[{"name":"BAR_POINT","cost":0.02}],"transform":[{"name":"BIN","cost":0.62,"details":[{"type":"removed","channel":"x"}]},{"name":"AGGREGATE","cost":0.64,"details":[{"type":"added","channel":"size"}]}],"encoding":[{"name":"ADD_SIZE_COUNT","cost":3.9},{"name":"MODIFY_X","cost":4.17},{"name":"MODIFY_Y","cost":4.17}],"cost":13.52}],[{"marktype":[],"transform":[],"encoding":[],"cost":0},{"marktype":[],"transform":[],"encoding":[{"name":"MODIFY_Y","cost":4.17}],"cost":4.17}],[{"marktype":[],"transform":[],"encoding":[],"cost":0}]]}];
