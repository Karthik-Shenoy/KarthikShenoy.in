import React from 'react'

export default function Projects() {
    var route_Project = () => {
        console.log("hello");
    }
    return (
        <>
            <div className="grid lg:grid-cols-4 p-7">
                <div className="max-w-xs m-4 rounded-lg shadow-lg bg-indigo-50" onClick={route_Project}>
                    <img className="w-full h-48 rounded-lg"
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                        alt="product" />
                    <div className="px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                        <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
                            elit.
                            Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                    </div>
                </div>
                <div className="max-w-xs m-4 rounded-lg shadow-lg bg-indigo-50">
                    <img className="w-full rounded-lg h-48"
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                        alt="product" />
                    <div className="px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                        <p className="leading-normal  text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
                            elit.
                            Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                    </div>
                </div>
                <div className="max-w-xs m-4 rounded-lg shadow-lg bg-indigo-50">
                    <img className="w-full h-48 rounded-lg"
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                        alt="product" />
                    <div className="px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                        <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
                            elit.
                            Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                    </div>
                </div>
                <div className="max-w-xs m-4 rounded-lg shadow-lg bg-indigo-50">
                    <img className="w-full h-48 rounded-lg"
                        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                        alt="product" />
                    <div className="px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
                        <p className="leading-normal text-gray-700">Lorem ipsum dolor, sit amet cons ectetur adipis icing
                            elit.
                            Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
