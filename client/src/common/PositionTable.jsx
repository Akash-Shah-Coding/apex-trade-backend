import React from 'react';

const PositionTable = ({ orders, handleConfirm, handleCancel }) => {
    const getColor = (type) => {
        switch (type) {
            case "Sell Limit":
                return 'text-blue-500';
            case 'Sell Stop':
                return 'text-red-500';
            case 'Sell Now':
                return 'text-yellow-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className="rounded-md overflow-auto dark:bg-gray-800 bg-white shadow-sm h-fit">
            <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Cancel All Orders</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 dark:bg-opacity-50">
                            <tr>
                                <th className="p-2">Sell Orders</th>
                                <th className="p-2">Price</th>
                                <th className="p-2">Buy Orders</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
                            {orders.length > 0 ? (
                                orders.map((order, index) => (
                                    <tr key={index}>
                                        <td className="p-2 text-center">
                                            <div className="flex justify-center space-x-2">
                                                <button
                                                    className="btn border-gray-500 dark:text-white hover:bg-red-600 text-gray-600 px-3 py-1 rounded w-full"
                                                    onClick={() => handleConfirm(order.id)}
                                                >
                                                    -
                                                </button>
                                                <button
                                                    className={`btn border-gray-600 px-3 py-1 hover:bg-blue-500 rounded w-full ${getColor(order.type)}`}
                                                    onClick={() => handleCancel(order.id)}
                                                >
                                                    {order.type}
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-2 text-center">
                                            <div className="flex justify-center space-x-2">
                                                <button
                                                    className="btn border-gray-600 text-gray-950 dark:text-white px-3 py-1 hover:bg-green-500 rounded w-full"
                                                    onClick={() => handleCancel(order.id)}
                                                >
                                                    {order.price}
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-2 text-center">
                                            <div className="flex justify-center space-x-2">
                                                <button
                                                    className="btn border-gray-600 text-gray-950 dark:text-white px-3 py-1 hover:bg-yellow-500 rounded w-full"
                                                    onClick={() => handleCancel(order.id)}
                                                >
                                                    {order.orderType}
                                                </button>
                                                <button
                                                    className="btn border-gray-500 dark:text-white hover:bg-red-600 text-gray-600 px-3 py-1 rounded w-full"
                                                    onClick={() => handleConfirm(order.id)}
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="text-center p-4">
                                        No orders available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PositionTable;
