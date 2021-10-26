import { color } from '@mui/system';
import React, { useState } from 'react';
import './OpenAIPlayground.scss';

const OpenAIPlayground = () => {
    const [text, setText] = useState('The quick brown fox jumped...');
    const [prediction, setPrediction] = useState('');
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(text);
        (async () => {
            const gptResponse = await openai.complete({
                engine: 'davinci',
                prompt: text,
                maxTokens: 100,
                temperature: 0.9,
                topP: 1,
                presencePenalty: 0,
                frequencyPenalty: 0,
                bestOf: 1,
                n: 1,
                stream: false,
                stop: ['\n', 'testing'],
            });

            setPrediction(gptResponse.data.choices[0].text);
        })();
    };
    const OpenAI = require('openai-api');
    const openAI_key = process.env.REACT_APP_OPENAI_API_KEY;
    const openai = new OpenAI(openAI_key);

    return (
        <div className="openAIform">
            <form onSubmit={handleSubmit} className="openAIform">
                <label>
                    <p style={{ fontSize: '1.4em' }}>Powered by OpenAI:</p>
                    <input
                        className="openAIinput"
                        type="text"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                            setPrediction('');
                        }}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>

            <div className="openAIresponse">
                <p>{text + ' ... ' + prediction}</p>
            </div>
        </div>
    );
};

export default OpenAIPlayground;
