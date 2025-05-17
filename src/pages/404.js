import { ArrowLeft, Code, Terminal } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Custom404() {
  const [count, setCount] = useState(10);
  const [showTerminal, setShowTerminal] = useState(true);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      {/* Glitch Effect Title */}
      <div className="relative">
        <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-2 animate-pulse">
          404
        </h1>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-30">
          <h1 className="text-8xl font-bold text-pink-500 mb-2 animate-pulse" style={{transform: 'translate(-5px, -5px)'}}>
            404
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="text-center max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        
        {showTerminal ? (
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden mb-6">
            {/* Terminal header */}
            <div className="bg-gray-700 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal size={16} />
                <span className="text-sm">terminal</span>
              </div>
              <button 
                onClick={() => setShowTerminal(false)} 
                className="text-gray-400 hover:text-white"
              >
                <span>×</span>
              </button>
            </div>
            
            {/* Terminal content */}
            <div className="p-4 font-mono text-sm text-left">
              <div className="flex">
                <span className="text-green-400 mr-2">dev@charlesawuku:~$</span>
                <span className="typing-animation">find / -name "requested-page"</span>
              </div>
              <div className="text-red-400 my-2">Error: File not found in directory</div>
              <div className="flex">
                <span className="text-green-400 mr-2">dev@charlesawuku:~$</span>
                <span>Redirecting to homepage in {count} seconds...</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-300 mb-6">
            Sorry, the page you're looking for doesn't exist. But don't worry,
            there's plenty more to explore on my portfolio.
          </p>
        )}
        
        <div className="flex items-center justify-center space-x-4">
          <Link href="/" className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition duration-300">
            <ArrowLeft size={18} className="mr-2" />
            Back to Home
          </Link>
          <button 
            onClick={() => setShowTerminal(!showTerminal)} 
            className="flex items-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition duration-300"
          >
            <Code size={18} className="mr-2" />
            {showTerminal ? "Hide Terminal" : "Show Terminal"}
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
          Charles Awuku
        </h3>
        <p className="text-gray-400">Full Stack Developer</p>
      </div>
    </div>
  );
}