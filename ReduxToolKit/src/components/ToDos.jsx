import { useState } from "react";
import { Edit, Save, Trash } from "lucide-react"; // Icon library (optional)

const ToDoItem = ({ text }) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg border border-gray-300">
            {isEditing ? (
                <input
                    type="text"
                    className="flex-1 px-2 py-1 border rounded focus:outline-none"
                    defaultValue={text}
                />
            ) : (
                <span className="flex-1">{text}</span>
            )}

            <div className="flex gap-2">
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    {isEditing ? <Save size={16} /> : <Edit size={16} />}
                </button>
                <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
                    <Trash size={16} />
                </button>
            </div>
        </div>
    );
};

export default ToDoItem;