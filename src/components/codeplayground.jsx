import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
// import theme from 'prism-react-renderer/themes/dracula';

const CodePlaygroundTool = () => {
    const [activeTab, setActiveTab] = useState('HTML');
    const [html, setHtml] = useState('<div id="app">Hello, World!</div>');
    const [css, setCss] = useState('body { font-family: Arial, sans-serif; }');
    const [js, setJs] = useState(`console.log('Hello, World!');`);

    const scope = { React };
    const compiledCode = `
    <html lang="en">
    <head>
       <style>
       ${css}
       </style>
    </head>
    <body>
        
    </body>
    </html>
  `;

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            {/* Tab Navigation */}
            <div style={{ display: 'flex', borderBottom: '2px solid #ccc', marginBottom: '20px' }}>
                {['HTML', 'CSS', 'JS'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            flex: 1,
                            padding: '10px',
                            cursor: 'pointer',
                            backgroundColor: activeTab === tab ? '#444' : '#f9f9f9',
                            color: activeTab === tab ? '#fff' : '#000',
                            border: 'none',
                            borderBottom: activeTab === tab ? '2px solid #007BFF' : '2px solid transparent',
                            transition: 'all 0.3s ease',
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div
                style={{
                    position: 'relative',
                    height: '150px', // Fixed height for smooth transitions
                    overflow: 'hidden',
                }}
            >
                {/* HTML Editor */}
                {activeTab === 'HTML' && (
                    <textarea
                        value={html}
                        onChange={(e) => setHtml(e.target.value)}
                        style={{
                            width: '100%',
                            height: '100%',
                            padding: '10px',
                            fontSize: '14px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            resize: 'none',
                            transition: 'opacity 0.3s ease',
                        }}
                    />
                )}

                {/* CSS Editor */}
                {activeTab === 'CSS' && (
                    <textarea
                        value={css}
                        onChange={(e) => setCss(e.target.value)}
                        style={{
                            width: '100%',
                            height: '100%',
                            padding: '10px',
                            fontSize: '14px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            resize: 'none',
                            transition: 'opacity 0.3s ease',
                        }}
                    />
                )}

                {/* JS Editor */}
                {activeTab === 'JS' && (
                    <textarea
                        value={js}
                        onChange={(e) => setJs(e.target.value)}
                        style={{
                            width: '100%',
                            height: '100%',
                            padding: '10px',
                            fontSize: '14px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            resize: 'none',
                            transition: 'opacity 0.3s ease',
                        }}
                    />
                )}
            </div>

            {/* Live Preview */}
            <div>
                <h3>Live Preview</h3>
                <LiveProvider
                    code={compiledCode}
                    scope={scope}

                >
                    <LivePreview style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }} />
                    <LiveError style={{ color: 'red', marginTop: '10px' }} />
                </LiveProvider>
            </div>
        </div>
    );
};

export default CodePlaygroundTool;
