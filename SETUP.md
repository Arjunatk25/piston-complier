# Judge0 API Setup Instructions

## Getting Your RapidAPI Key

1. Go to [RapidAPI Judge0 CE](https://rapidapi.com/judge0-official/api/judge0-ce)
2. Click "Sign Up" (free tier available)
3. Subscribe to the Judge0 CE API (free tier: 50 requests/day)
4. Copy your API key from the dashboard

## Configuration

1. Open `src/utils/pistonApi.ts`
2. Replace `YOUR_RAPIDAPI_KEY` with your actual RapidAPI key:

```typescript
const RAPIDAPI_KEY = "your-actual-key-here";
```

## Supported Languages

- **Java** (language_id: 62)
- **Python** (language_id: 71)
- **C++** (language_id: 54)
- **JavaScript** (language_id: 63)

## Running the Project

```bash
npm install
npm start
```

The app will open at http://localhost:3000

## Usage

1. Select a language from the language selector
2. The code editor will load with a sample PIN generator program
3. Enter 3 numbers in the input field (one per line), e.g.:
   ```
   10
   20
   30
   ```
4. Click "Run" to execute the code
5. View the output showing the generated 5-digit PIN

## Features

- Multi-language support (Java, Python, C++, JavaScript)
- Real-time code execution via Judge0 API
- Custom input support
- Error handling and compilation output display
- Electric border animation effect
