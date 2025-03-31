import React, { useState } from 'react';
import './Diet.css';
import { 
  Heart, 
  Goal, 
  Activity, 
  User, 
  Salad, 
  Clock, 
  Check 
} from 'lucide-react';

const DietPlan = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    goal: 'weight_loss',
    activity: 'moderate',
    preferences: []
  });
  const [dietPlan, setDietPlan] = useState(null);

  const foodPreferences = [
    'Vegetarian', 'Vegan', 'Gluten-Free', 
    'Dairy-Free', 'Nut-Free', 'Pescatarian'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setUserData(prev => ({
      ...prev,
      preferences: checked
        ? [...prev.preferences, value]
        : prev.preferences.filter(item => item !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const basePlans = {
      weight_loss: {
        breakfast: "Oatmeal with berries (300 cal)",
        lunch: "Grilled chicken with vegetables (450 cal)",
        dinner: "Salmon with quinoa (400 cal)",
        snacks: "Handful of almonds (200 cal)"
      },
      muscle_gain: {
        breakfast: "Protein smoothie (500 cal)",
        lunch: "Lean beef with brown rice (600 cal)",
        dinner: "Grilled fish with sweet potato (550 cal)",
        snacks: "Protein shake (300 cal)"
      },
      maintenance: {
        breakfast: "Greek yogurt with granola (350 cal)",
        lunch: "Turkey wrap with whole wheat (400 cal)",
        dinner: "Stir-fried tofu with rice (450 cal)",
        snacks: "Fruits and nuts (250 cal)"
      }
    };

    let finalPlan = { ...basePlans[userData.goal] };
    
    if (userData.preferences.includes('Vegetarian')) {
      finalPlan.lunch = "Lentil curry with brown rice (450 cal)";
      finalPlan.dinner = "Vegetable stir-fry with tofu (400 cal)";
    }
    
    if (userData.preferences.includes('Vegan')) {
      finalPlan.breakfast = "Smoothie bowl with chia seeds (350 cal)";
      finalPlan.lunch = "Chickpea salad wrap (400 cal)";
      finalPlan.dinner = "Vegan buddha bowl (450 cal)";
    }
    
    if (userData.preferences.includes('Gluten-Free')) {
      finalPlan.breakfast = finalPlan.breakfast.replace("whole wheat", "gluten-free");
      finalPlan.lunch = finalPlan.lunch.replace("wrap", "gluten-free wrap");
    }

    setDietPlan(finalPlan);
    setStep(2);
  };

  const handleStartOver = () => {
    setStep(1);
    setUserData({
      name: '',
      age: '',
      weight: '',
      height: '',
      goal: 'weight_loss',
      activity: 'moderate',
      preferences: []
    });
    setDietPlan(null);
  };

  return (
    <div className="diet-app-container">
      <div className="diet-container">
        {step === 1 ? (
          <form onSubmit={handleSubmit} className="diet-form">
            <h2>Create Your Diet Plan</h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label><User size={18} /> Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  value={userData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Your Name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Age:</label>
                  <input 
                    type="number" 
                    name="age" 
                    value={userData.age} 
                    onChange={handleChange} 
                    required 
                    min="10"
                    max="100"
                    placeholder="Years"
                  />
                </div>

                <div className="form-group">
                  <label>Weight (kg):</label>
                  <input 
                    type="number" 
                    name="weight" 
                    value={userData.weight} 
                    onChange={handleChange} 
                    required 
                    min="30"
                    max="200"
                    placeholder="Kilograms"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Height (cm):</label>
                  <input 
                    type="number" 
                    name="height" 
                    value={userData.height} 
                    onChange={handleChange} 
                    required 
                    min="100"
                    max="250"
                    placeholder="Centimeters"
                  />
                </div>

                <div className="form-group">
                  <label><Activity size={18} /> Activity Level:</label>
                  <select 
                    name="activity" 
                    value={userData.activity} 
                    onChange={handleChange}
                  >
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Light Activity</option>
                    <option value="moderate">Moderate Activity</option>
                    <option value="active">Active</option>
                    <option value="very_active">Very Active</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label><Goal size={18} /> Goal:</label>
                <div className="goal-options">
                  {['weight_loss', 'muscle_gain', 'maintenance'].map(goal => (
                    <label key={goal} className="goal-option">
                      <input
                        type="radio"
                        name="goal"
                        value={goal}
                        checked={userData.goal === goal}
                        onChange={handleChange}
                      />
                      <span>{goal.replace('_', ' ')}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label><Salad size={18} /> Diet Preferences:</label>
                <div className="preferences-grid">
                  {foodPreferences.map(pref => (
                    <label key={pref} className="preference-option">
                      <input
                        type="checkbox"
                        value={pref}
                        checked={userData.preferences.includes(pref)}
                        onChange={handleCheckboxChange}
                      />
                      <span>{pref}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="button-container">
              <button type="submit" className="submit-btn">
                <Check size={20} /> Generate Diet Plan
              </button>
            </div>
          </form>
        ) : (
          <div className="plan-result">
            <h2>Your Personalized Diet Plan</h2>
            
            <div className="user-summary">
              <h3><User size={20} /> Your Profile</h3>
              <div className="user-details">
                <p><span>Name:</span> {userData.name}</p>
                <p><span>Age:</span> {userData.age}</p>
                <p><span>Weight:</span> {userData.weight} kg</p>
                <p><span>Height:</span> {userData.height} cm</p>
                <p><span>Activity:</span> {userData.activity.replace('_', ' ')}</p>
                <p><span>Goal:</span> {userData.goal.replace('_', ' ')}</p>
                {userData.preferences.length > 0 && (
                  <p><span>Preferences:</span> {userData.preferences.join(', ')}</p>
                )}
              </div>
            </div>

            <div className="plan-details">
              <h3><Clock size={20} /> Daily Meal Plan</h3>
              
              <div className="plan-cards">
                {Object.entries(dietPlan).map(([time, description]) => (
                  <div key={time} className="plan-card">
                    <div className="meal-time">{time.charAt(0).toUpperCase() + time.slice(1)}</div>
                    <div className="meal-description">{description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="button-container">
              <button 
                onClick={handleStartOver} 
                className="back-btn"
              >
                <Heart size={20} /> Start New Plan
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DietPlan;