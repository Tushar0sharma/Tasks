import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between gap-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Social Media Links</h2>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors duration-300"
                            >
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 transition-colors duration-300"
                            >
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 transition-colors duration-300"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500 transition-colors duration-300"
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4">User Support</h2>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="/faq"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                FAQ Section
                            </a>
                        </li>
                        <li>
                            <a
                                href="/report-issues"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                Report Issues
                            </a>
                        </li>
                        <li>
                            <a
                                href="/help-center"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                Help Center
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
