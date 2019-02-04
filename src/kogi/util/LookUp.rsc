module kogi::util::LookUp

import Type;

@javaClass{kogi.util.LookUp}
@reflect{Need access to environment}
java type[&T] lookupType(str typ)throws Exception;