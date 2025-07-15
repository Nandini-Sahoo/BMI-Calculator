function calculateBMI() {
    const wt = document.getElementById("weight");
    const hgt = document.getElementById("height");
    const weight = parseFloat(wt.value);
    const height = parseFloat(hgt.value);
    const res = document.getElementById("result");
    const imgurl = document.getElementById("image");
    const guideline = document.getElementById("guide");

    if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
        res.textContent = "Please enter valid Weight & Height!";
        imgurl.innerHTML = "";
        guideline.textContent = "";
        return;
    }

    const bmi = weight / (height * height);
    let cat = "";
    let imgSrc = "";
    let gud = "";

    if (bmi < 18.5) {
        cat = "Underweight!";
        imgSrc = "https://thumbs.dreamstime.com/b/young-man-white-shirt-underweight-comic-cartoon-illustration-unhealthy-nutrition-article-image-vector-character-79246727.jpg";
        gud = "<p>Eat more frequently and it should include:</p><ul><li>Healthy fats: Nuts, seeds, avocado, olive oil, nut butters.</li><li>Lean proteins: Eggs, chicken, fish, lentils, beans, tofu, dairy.</li><li>Complex carbs: Brown rice, oats, whole wheat bread, sweet potatoes, quinoa.</li><li>Dairy: Whole milk, cheese, yogurt (rich in calories and protein).</li><li>Smoothies: High-calorie, nutrient-rich drinks with milk, fruit, nuts, and protein powder.</li></ul><p>Also do exercise regularly and manage stress and sleep.</p>";
    } else if (bmi < 24.9) {
        cat = "Normal Weight!";
        imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWrJ0RJmcUcrQaJejrbAD5S_-0_XEdEhIIGQ&s";
        gud = "<p>Maintain a balanced diet. To keep your weight stable your diet should include:</p><ul><li>Fruits and vegetables (at least 5 servings per day)</li><li>Whole grains: Brown rice, oats, whole wheat bread, millets</li><li>Lean proteins: Eggs, chicken, fish, legumes, tofu, dairy.</li><li>Healthy fats: Nuts, seeds, avocado, olive oil</li></ul><p>Exercise daily and stay hydrated</p>";
    } else if (bmi < 29.9) {
        cat = "Overweight!";
        imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQiBiBb_AW3QZp9psdu_ahee27KoY4hilJmQ&s";
        gud = "<p>Set realistic weight loss goals like:</p><ul><li>Aim to lose 0.5 to 1 kg per week</li><li>Focus on fat loss, not just weight loss</li><li>Be patient: consistency > quick fixes</li></ul><p>Eat More:</p><ul><li>Fruits & Vegetables (rich in fiber and low in calories)</li><li>Whole grains: Brown rice, oats, quinoa, whole wheat</li><li>Lean proteins: Eggs, fish, chicken (skinless), legumes, tofu</li><li>Healthy fats: Nuts (in small portions), seeds, olive oil</li><li>Low-fat dairy: Milk, curd, paneer (in moderation)</li></ul><p>Exercise regularly like walking, low-impact cardio then gradually add strength training.</p>";
    } else {
        cat = "Obese!";
        imgSrc = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcMiL-y2hLiLWvdOVOnk8kaheKFqQ7wqAyw&s";
        gud = "<p>Visit a doctor/dietitian for check up or get personalized dietary and exercise advice.<br>Avoid?Limit:</p><ul><li>Sugar, sweets, sugary beverages</li><li>White/refined carbs: Maida, white bread, noodles</li><li>Deep-fried and fast foods</li><li>Processed & packaged foods</li><li>Emotional eating and snacking while watching screens</li></ul><p>Start with light, consistent excercise like: Walking, chair exercises or water aerobics, breathing & stretching</p>";
    }

    res.textContent = `Your BMI is ${bmi.toFixed(2)} & category is (${cat})`;
    imgurl.innerHTML = `<img src="${imgSrc}" alt="${cat}" />`;
    guideline.innerHTML = gud;
}
