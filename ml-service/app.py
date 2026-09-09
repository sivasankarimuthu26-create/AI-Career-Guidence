from flask import Flask, request, jsonify
app = Flask(__name__)


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "AI Career Guidance ML Service is running!"
    })


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    print("Received data:")
    print(data)

    # Get student answers
    technical_area = data.get("technicalArea", "").lower()
    programming_level = data.get("programmingLevel", "").lower()
    interest = data.get("interest", "").lower()
    career_goal = data.get("careerGoal", "").lower()

    # Default recommendation
    career = "Full Stack Developer"

    description = (
        "A Full Stack Developer builds both the frontend and backend "
        "of web applications and works with databases and APIs."
    )

    skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs"
    ]

    roadmap = [
        "Strengthen HTML, CSS and JavaScript",
        "Learn React.js",
        "Learn Node.js and Express.js",
        "Learn MongoDB",
        "Build full-stack projects",
        "Learn Git and GitHub",
        "Deploy projects and create a portfolio"
    ]


    # Career prediction logic

    if "data science" in technical_area:

        career = "Data Scientist"

        description = (
            "A Data Scientist analyzes data and uses statistics, "
            "programming and machine learning to solve real-world problems."
        )

        skills = [
            "Python",
            "SQL",
            "Statistics",
            "Pandas",
            "NumPy",
            "Machine Learning",
            "Data Visualization"
        ]

        roadmap = [
            "Learn Python",
            "Learn SQL",
            "Learn statistics",
            "Practice Pandas and NumPy",
            "Learn data visualization",
            "Learn Machine Learning",
            "Build data science projects"
        ]


    elif "artificial intelligence" in technical_area or "ai" in technical_area:

        career = "AI/ML Engineer"

        description = (
            "An AI/ML Engineer develops intelligent systems using "
            "machine learning and artificial intelligence techniques."
        )

        skills = [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "NumPy",
            "Pandas",
            "Scikit-learn",
            "TensorFlow/PyTorch"
        ]

        roadmap = [
            "Learn Python",
            "Learn mathematics and statistics",
            "Learn Machine Learning",
            "Practice Scikit-learn",
            "Learn Deep Learning",
            "Build AI projects",
            "Deploy ML models using APIs"
        ]


    elif "cybersecurity" in technical_area:

        career = "Cybersecurity Analyst"

        description = (
            "A Cybersecurity Analyst protects systems, networks and "
            "applications from security threats and attacks."
        )

        skills = [
            "Networking",
            "Linux",
            "Cybersecurity Fundamentals",
            "Ethical Hacking",
            "Web Security",
            "Cryptography",
            "Security Tools"
        ]

        roadmap = [
            "Learn computer networking",
            "Learn Linux",
            "Study cybersecurity fundamentals",
            "Learn ethical hacking",
            "Practice web security",
            "Learn security tools",
            "Complete cybersecurity projects"
        ]


    elif "cloud computing" in technical_area or "cloud" in technical_area:

        career = "Cloud Engineer"

        description = (
            "A Cloud Engineer designs, deploys and manages applications "
            "and infrastructure on cloud platforms."
        )

        skills = [
            "AWS/Azure/GCP",
            "Linux",
            "Networking",
            "Docker",
            "Kubernetes",
            "CI/CD",
            "Cloud Security"
        ]

        roadmap = [
            "Learn Linux",
            "Learn networking fundamentals",
            "Choose AWS, Azure or GCP",
            "Learn cloud services",
            "Learn Docker",
            "Learn CI/CD",
            "Build and deploy cloud projects"
        ]


    elif "networking" in technical_area:

        career = "Network Engineer"

        description = (
            "A Network Engineer designs, configures and maintains "
            "computer networks and network infrastructure."
        )

        skills = [
            "Computer Networks",
            "TCP/IP",
            "Routing",
            "Switching",
            "Linux",
            "Network Security",
            "Cloud Networking"
        ]

        roadmap = [
            "Learn networking fundamentals",
            "Study TCP/IP",
            "Learn routing and switching",
            "Practice network configuration",
            "Learn Linux networking",
            "Study network security",
            "Work on networking projects"
        ]


    elif "design" in interest:

        career = "UI/UX Designer"

        description = (
            "A UI/UX Designer creates user-friendly and visually "
            "appealing interfaces for websites and applications."
        )

        skills = [
            "Figma",
            "UI Design",
            "UX Design",
            "Wireframing",
            "Prototyping",
            "User Research",
            "Design Systems"
        ]

        roadmap = [
            "Learn UI/UX fundamentals",
            "Learn Figma",
            "Practice wireframing",
            "Learn prototyping",
            "Study user experience",
            "Create design projects",
            "Build a UI/UX portfolio"
        ]


    elif "web development" in technical_area:

        career = "Full Stack Developer"

        description = (
            "A Full Stack Developer builds complete web applications "
            "using frontend, backend and database technologies."
        )

        skills = [
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs"
        ]

        roadmap = [
            "Master HTML and CSS",
            "Improve JavaScript",
            "Learn React.js",
            "Learn Node.js and Express.js",
            "Learn MongoDB",
            "Build full-stack projects",
            "Deploy your applications"
        ]


    # =====================================
    # CALCULATE CAREER MATCH SCORE
    # =====================================

    match_score = 70


    # Programming skill level

    if programming_level == "advanced":
        match_score += 10

    elif programming_level == "intermediate":
        match_score += 6

    elif programming_level == "beginner":
        match_score += 2


    # CGPA score

    try:
        cgpa = float(data.get("cgpa", 0))

        if cgpa >= 9:
            match_score += 10

        elif cgpa >= 8:
            match_score += 8

        elif cgpa >= 7:
            match_score += 6

        elif cgpa >= 6:
            match_score += 4

        else:
            match_score += 2

    except (ValueError, TypeError):
        cgpa = 0


    # Career goal bonus

    if career_goal:
        match_score += 5


    # Maximum score

    match_score = min(match_score, 98)


    # Send response

    return jsonify({
        "success": True,
        "career": career,
        "matchScore": match_score,
        "description": description,
        "skills": skills,
        "roadmap": roadmap,
        "message": "Career prediction generated successfully!"
    })


import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5001))
    app.run(host="0.0.0.0", port=port)