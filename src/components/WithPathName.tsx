import { useLocation } from "react-router-dom";

function withPathName(Component: React.ElementType) {
    return function WrappedComponent(props: Record<string, any>) {
        let { pathname } = useLocation();
        return <Component {...props} pathName={pathname}/>
    }
}

export default withPathName;