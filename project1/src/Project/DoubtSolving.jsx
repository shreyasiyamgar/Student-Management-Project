import React, { useState } from 'react';

const DoubtSolving = () => {
  const [question, setQuestion] = useState('');
  const [solution, setSolution] = useState('');
  const [loading, setLoading] = useState(false);
  const [className, setClassName] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = async () => {
    if (!className) {
      alert('Please select a class.');
      return;
    }
    if (!subject.trim()) {
      alert('Please enter a subject.');
      return;
    }
    if (!question.trim()) {
      alert('Please enter a question.');
      return;
    }

    setLoading(true);
    setSolution('');

    try {
      const res = await fetch('http://localhost:5000/api/doubtSolution', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, className, subject }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `Server responded with ${res.status}`);
      }

      setSolution(data.answer || 'No answer found.');
    } catch (error) {
      console.error('Error fetching answer:', error);
      setSolution(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setClassName('');
    setSubject('');
    setQuestion('');
    setSolution('');
  };

  return (
    <>
      {/* Header */}
      <div className='h-[70px] w-full text-center text-2xl bg-[#ABD7F2] flex items-center justify-center font-bold'>
        <h2>Doubt Solution</h2>
      </div>

      {/* Sub-header */}
      <div className='h-[100px] w-full mt-5 text-center bg-gray-400/30 flex flex-col justify-center'>
        <h3 className='text-4xl font-semibold'>Go from questioning to understanding</h3>
        <h4 className='text-2xl'>Get clear explanations for your doubts.</h4>
      </div>

      {/* Input Form */}
      <div className='w-[70%] mx-auto mt-8 bg-sky-100 p-6 flex flex-col gap-5 rounded-lg shadow-lg border border-sky-400'>
        
        {/* Class Selector */}
        <select
          className='h-10 w-[80%] mx-auto text-lg text-gray-700 px-2 border border-black rounded focus:outline-none bg-white'
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        >
          <option value="">Class</option>
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={`${i + 1}th`}>
              {i + 1}th
            </option>
          ))}
        </select>

        {/* Subject Input */}
        <input
          type="text"
          placeholder='Subject'
          className='h-10 w-[80%] mx-auto text-lg text-gray-700 px-2 border border-black rounded focus:outline-none bg-white'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        {/* Question Input */}
        <textarea
          placeholder='Ask your Question?'
          className='h-24 w-[80%] mx-auto text-lg text-red-400 placeholder-red-300 px-2 py-1 border border-black rounded bg-white resize-none focus:outline-none'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>

        {/* Submit Button */}
        <button
          className='h-10 w-[30%] mx-auto bg-sky-400 hover:bg-sky-500 transition text-white text-xl rounded-md disabled:opacity-50'
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </div>

      {/* Solution Section */}
      <h1 className='mt-5 ml-[15%] text-2xl font-semibold'>Your Solution:</h1>

      <div className='flex flex-col items-center'>
        <textarea
          className='w-[70%] h-[500px] mt-5 bg-gray-200 text-black/70 text-lg p-4 border border-black rounded resize-none focus:outline-none'
          placeholder='Your solution will appear here...'
          value={solution}
          readOnly
        ></textarea>

        {/* Clear Button */}
        <button
          className='mt-4 h-10 w-[19%] bg-red-400 hover:bg-red-500 transition text-white text-xl rounded-md'
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </>
  );
};

export default DoubtSolving;
