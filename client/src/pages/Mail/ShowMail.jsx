import React from 'react'

const ShowMail = ({ selectedMail }) => {
    return (
        <section className="max-w-2xl px-6 py-8 mx-auto bg-white dark:bg-gray-800">
            <header>
                <h2 className="text-gray-700 dark:text-gray-200">{selectedMail.headline}</h2>
            </header>

            <main className="mt-8">
                <h3 className="text-gray-700 dark:text-gray-200">From: {selectedMail.from}</h3>
                <p className="text-gray-600 dark:text-gray-300">Time: {selectedMail.time}</p>

                <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
                    {selectedMail.preview}
                </p>

                {/* Verification code if exists */}
                {selectedMail.verificationCode && (
                    <div>
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Here is your verification code:
                        </p>
                        <div className="flex items-center mt-4 gap-x-4">
                            {selectedMail.verificationCode.split("").map((digit, index) => (
                                <p key={index} className="flex items-center justify-center w-10 h-10 text-2xl font-medium text-blue-500 border border-blue-500 rounded-md dark:border-blue-400 dark:text-blue-400 ">
                                    {digit}
                                </p>
                            ))}
                        </div>
                    </div>
                )}

                {/* Action Button if actionRequired */}
                {selectedMail.actionRequired && (
                    <button className="px-6 py-2 mt-6 text-sm font-medium tracking-wider text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Take Action
                    </button>
                )}
                <footer className="mt-8">
                    <p className="text-gray-500 dark:text-gray-400">
                        This email was sent to you. If you'd rather not receive this kind of email, you can unsubscribe or manage your preferences.
                    </p>
                    <p className="mt-3 text-gray-500 dark:text-gray-400">© 2024 Mailbox Inc. All Rights Reserved.</p>
                </footer>

            </main>


            {/* Reply Box */}
            <div className="mt-6">
                <textarea
                    className="w-full p-3 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:placeholder-gray-400"
                    placeholder="Reply to this mail..."
                    rows={4}
                />
                <button
                    type="button"
                    className="mt-2 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-400"
                >
                    Send
                </button>
            </div>
        </section>
    )
}

export default ShowMail
