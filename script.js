function recommend() {
    let input = document.getElementById("interest").value.toLowerCase();
    let result = "";

    if (input.includes("ai")) {
        result = "🤖 AI Internship | ML Hackathon | Deep Learning Course";
    } 
    else if (input.includes("web")) {
        result = "🌐 Web Dev Internship | Frontend Hackathon | React Course";
    } 
    else if (input.includes("data")) {
        result = "📊 Data Science Internship | Kaggle Projects | Python Course";
    } 
    else {
        result = "🚀 Explore Internships | Hackathons | Learning Resources";
    }

    document.getElementById("result").innerHTML = result;
}
