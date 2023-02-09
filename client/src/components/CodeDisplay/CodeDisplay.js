import React, { useState, useEffect } from 'react';
import hljs from 'highlight.js/lib/common';
import PDFViewer from '../NotesDisplay/NotesDisplay';
import 'highlight.js/styles/github.css';

const MyComponent = () => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://raw.githubusercontent.com/Karthik-Shenoy/Data_Structures_And_Algorithms/main/450_DSA_Sheet/Back_Tracking/Kth_permutation.cpp'
                );
                const code = await response.text();
                setData(code);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    hljs.highlightAll();
    return (
        <div className='p-6 flex'>
            <div className='w-1/2'>
                <div className='mr-5 shadow-lg p-4 monokai-bg rounded-xl'>
                    {data ? (
                        <pre className='text-left'>
                            <code className="cpp">{data}</code>
                        </pre>
                    ) : (
                        <p>Loading code...</p>
                    )}
                </div>
            </div>
            <div className='w-1/2 shadow-lg p-4 rounded-lg'>
                <PDFViewer src="https://legislative.gov.in/sites/default/files/dummy-pdf_2.pdf"/>
            </div>
        </div>
    );
};

export default MyComponent;
