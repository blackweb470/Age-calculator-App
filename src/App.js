import React  from "react";
import ApiContextProvider from "./Context/Data";
import Form from "./Form";



function App(props) {
 return (
 <div>
<ApiContextProvider>
<Form />
</ApiContextProvider>
 </div>
      );

  
}

export default App;
