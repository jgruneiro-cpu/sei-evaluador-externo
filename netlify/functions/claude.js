const Anthropic = require('@anthropic-ai/sdk');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }
  try {
    const client = new Anthropic();
    const { model, max_tokens, system, messages } = JSON.parse(event.body);
    const response = await client.messages.create({
      model: model || 'claude-sonnet-4-6',
      max_tokens: max_tokens || 2000,
      system,
      messages
    });
    return { statusCode: 200, headers, body: JSON.stringify(response) };
  } catch (err) {
    console.error('Claude API error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message })
    };
  }
};
