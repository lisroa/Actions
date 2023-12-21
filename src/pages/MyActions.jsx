import Input from "../components/Input";
import Tabla from "../components/Table";

function MyActions() {
  return (
    <>
      <div className="w-full h-20 border-b border-gray-500 p-4">
        <h3 className="text-center font-medium text-xl">My Actions</h3>
        <p className="text-center">Lis Gimena Roa</p>
      </div>

      <Input />
      <Tabla />
    </>
  );
}

export default MyActions;
