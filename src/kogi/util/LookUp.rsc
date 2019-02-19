module kogi::util::LookUp

import Type;

@javaClass{kogi.util.LookUp}
@reflect{Need access to environment}
java type[&T] lookupType(str typ)throws Exception;

type[&T] reifyADT(str name, type[&T<:node] n) {
	for (def <- n.definitions) {
		if (adt(name, _) := def)
			return type(def, (def : n.definitions[def]));
	}
	throw "Element <name> not found.";
}