export function mapCharacter(char: string): string {
    // Alphabet mapping (ROT13)
    if (char >= "A" && char <= "Z") {
      return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
    }
  
    if (char >= "a" && char <= "z") {
      return String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
    }
  
    // Number mapping (0–4 ↔ 5–9)
    if (char >= "0" && char <= "9") {
      const num = parseInt(char);
      return num < 5 ? String(num + 5) : String(num - 5);
    }
  
    // Other characters unchanged
    return char;
  }
  