//Module Export Import
//class Export<------------------>class Import
//function Export<--------------->function Import
//variable Export<--------------->variable Import

//Name::Export-Import By Using same Name
//Name::Export-Import By Using Any Name
//-------------------------------------------------
/*
import script file link koralar somay type module dite hobe 
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

<script type="module" src="./js/Bangladsh.js"></script>
*/
//Export-Import same Name
//Amrika.js---file
//var laptop=["Lelovo","hp","dell"]
//export{laptop}

//Bangladesh js---file
//import {laptop} from "./Amrika.js";
//console.log(laptop)




//Export-Import default Name
//Amrika.js---file
//var laptop=["Lelovo","hp","dell"]
//export default laptop

//Bangladesh js---file
//import xx from "./Amrika.js";
//console.log(xx)



