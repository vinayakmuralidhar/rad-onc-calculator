{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 exports.handler = async (event) => \{\
  if (event.httpMethod !== 'POST') \{\
    return \{ statusCode: 405, body: 'Method Not Allowed' \};\
  \}\
\
  const response = await fetch('https://api.anthropic.com/v1/messages', \{\
    method: 'POST',\
    headers: \{\
      'Content-Type': 'application/json',\
      'x-api-key': process.env.ANTHROPIC_API_KEY,\
      'anthropic-version': '2023-06-01'\
    \},\
    body: event.body\
  \});\
\
  const data = await response.json();\
  return \{\
    statusCode: response.status,\
    headers: \{ 'Content-Type': 'application/json' \},\
    body: JSON.stringify(data)\
  \};\
\};}