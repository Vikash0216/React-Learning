import { Login as LoginComponent} from "../components/index"

function Login(){
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <LoginComponent />
          </div>
        </div>
      );
    }
    
export default Login