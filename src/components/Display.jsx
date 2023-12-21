import { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCopy } from 'react-icons/fa'; // Importez l'icône de copie depuis Font Awesome (exemples)
import { codeString } from '../fakeData/data';


function CodeDisplay() {


    const codeRef = useRef(null);
    const [copySuccess, setCopySuccess] = useState(false);

    const copyToClipboard = () => {
        if (codeRef && codeRef.current) {
            const el = codeRef.current.firstChild;
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(el);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
            setCopySuccess(true); // Mettre à jour le state pour indiquer que la copie a réussi
            setTimeout(() => setCopySuccess(false), 1500); // Réinitialiser après 1,5 seconde
        }
    };

    return (
        <div style={{ backgroundColor: '#f0f0f0',position: 'relative' }}>
            <div ref={codeRef} style={{ position: 'relative' }}>
                <SyntaxHighlighter language="javascript" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
                <button
                    onClick={copyToClipboard}
                    style={{
                        position: 'absolute',
                        top: '5px',
                        right: '5px',
                        background:'gray',
                        border: 'none',
                        cursor: 'pointer',
                        width:'80px',
                        height:'30px',
                        borderRadius:'10px',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    {copySuccess ? 'Copied!' : <FaCopy style={{ color:'white' }}/>}
                </button>
            </div>
        </div>
    );
}

export default CodeDisplay;
