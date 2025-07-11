
import { type ButtonPage } from '../schema';

export async function getButtonPage(): Promise<ButtonPage> {
    // This handler returns HTML content for a simple page with a single cyan button
    // The button is centered on the page with no other elements or text
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cyan Button</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            html, body {
                height: 100%;
                background: white;
            }
            
            body {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            .cyan-button {
                width: 120px;
                height: 40px;
                background-color: cyan;
                border: none;
                border-radius: 4px;
                cursor: default;
                pointer-events: none;
            }
        </style>
    </head>
    <body>
        <button class="cyan-button"></button>
    </body>
    </html>
    `;
    
    return { html };
}
