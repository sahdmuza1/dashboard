import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Sahad", email: "sahd@gmail.com" },
    
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [editData, setEditData] = useState({ name: "", email: "" });

  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [showForm, setShowForm] = useState(false);

  
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  
  const handleEdit = (user) => {
    setEditingUser(user.id);
    setEditData({ name: user.name, email: user.email });
  };

  
  const handleSave = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, name: editData.name, email: editData.email } : user
      )
    );
    setEditingUser(null);
  };

 
  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
      setNewUser({ name: "", email: "" });
      setShowForm(false); 
    }
  };

  return (
    <div className="flex flex-col h-full w-full p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Users</h2>
        <button
          onClick={() => setShowForm(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 hover:text-white font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        
          + 
        </button>
      </div>

   
      {showForm && (
        <div className="bg-gray-200 p-4 mb-4 rounded">
          <h3 className="text-lg font-semibold mb-2">New User</h3>
          <input
            type="text"
            placeholder="Name"
            className="border px-3 py-2 w-full mb-2"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 w-full mb-2"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <div className="flex space-x-2">
            <button onClick={handleAddUser} className="text-black  hover:bg-blue-800 hover:text-white focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add
            </button>
            <button onClick={() => setShowForm(false)} className="text-black bg-white hover:bg-red-700 hover:text-white focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2  ">
                  
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="flex-1 overflow-auto">
        <table className="w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-500 text-white">
            <tr>
              <th className="py-2 px-4 border-b hover:bg-red-400 hover:text-yellow-500  text-left">#</th>
              <th className="py-2 px-4 border-b hover:text-red-800 text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{index + 1}</td>

               
                {editingUser === user.id ? (
                  <>
                    <td className="py-2 px-4 border-b">
                      <input
                        type="text"
                        className="border px-2 py-1 w-full"
                        value={editData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      />
                    </td>
                    <td className="py-2 px-4 border-b">
                      <input
                        type="email"
                        className="border px-2 py-1 w-full"
                        value={editData.email}
                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="py-2 px-4 border-b">{user.name}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                  </>
                )}

               
                <td className="py-2 px-4 border-b flex space-x-2">
                  {editingUser === user.id ? (
                    <button
                      onClick={() => handleSave(user.id)}
                      className="text-black bg-white hover:bg-green-500 hover:text-white font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-white dark:hover:bg-green-700 ">
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-black bg-white hover:bg-yellow-500 hover:text-white  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">               
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-black bg-white hover:bg-red-500 hover:text-white font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-whi dark:hover:bg-red-700 dark:focus:ring-red-900">
                  
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
