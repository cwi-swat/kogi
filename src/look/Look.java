package look;

import org.rascalmpl.interpreter.IEvaluatorContext;
import org.rascalmpl.interpreter.TypeReifier;
import org.rascalmpl.interpreter.env.Environment;
import org.rascalmpl.interpreter.staticErrors.UndeclaredType;
import io.usethesource.vallang.IConstructor;
import io.usethesource.vallang.IString;
import io.usethesource.vallang.IValueFactory;
import io.usethesource.vallang.type.TypeFactory;


public class Look {
	
	private final IValueFactory vf;
	
    public Look(IValueFactory vf) { 
      this.vf = vf;
    }
	
	public IConstructor lookupType(IString s, IEvaluatorContext ctx) {
        Environment currentEnvt = ctx.getCurrentEnvt();
        String name = s.getValue();
        io.usethesource.vallang.type.Type type = null;

        if ("int".equals(name)) {
            type = TypeFactory.getInstance().integerType();
        } else if ("str".equals(name)) {
            type = TypeFactory.getInstance().stringType();
        } else if (currentEnvt != null) {
            type = currentEnvt.lookupAlias(name);

            if (type == null) {
                type = currentEnvt.lookupConcreteSyntaxType(name);
            }
            
            if (type == null) {
            	type = currentEnvt.lookupAbstractDataType(name);
            }
            
//            TypeFactory.getInstance().abstractDataType(currentEnvt, name);
//            TypeFactory.getInstance().abs

        }
        if (type != null) {
        	//return  type.getTypeReifier().getSymbolConstructorType();
        	//currentEnvt.getAbstractDataType(name);
        	
        	
            return new TypeReifier(vf).typeToValue(type, currentEnvt.getStore(), vf.mapWriter().done());
//            return type.getTypeReifier();
//            return new TypeReifier(vf).re
        }
        throw new UndeclaredType(name, null);
    }
}
