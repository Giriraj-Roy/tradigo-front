
const pointHeadRegex = /(\d+\.\s)(:)/g;
const boldHeadRegex = /\*\*([^*]+)\*\*/g;
const pointRegex = /(\d+\.\s)/g;
const boldRegex = /\*([^*]+)\*/g;


export const useRegex = (response : string) => {


    const formattedText = response
                            ?.replace(pointHeadRegex, '<li><strong>$1</strong></li>')
                            ?.replace(pointRegex, '<li><strong>$1</strong></li>')
                            ?.replace(boldHeadRegex, '<div><strong>$1</strong><div>')
                            ?.replace(boldRegex, '<strong>$1</strong>')
    
    const finalOutput = `<div><ul>${formattedText?.replace(/<li>/g,'<li>').replace(/<\/li>/g,'</li>')}</ul></div>`;
    
    return finalOutput
}
// const combinedRegex = /(\d+\.\s)(\*\*[^*]+\*\*)/g;
//(\*\*[^*]+\*\*)