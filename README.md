# GreenWave

Made by Inder Sharma, Prantik Maitra and Tejas Nasa for Hack-It-Up Hackathon organised by IGDTUW

# Tech Stack:
- Frontend: Nextjs, Tailwind, shadcnUI, Zod, Prisma
- Database: PostgreSQL
- Deployment: Vercel, Aiven, Streamlit
- Machine Learning: Python, Pandas, Numpy, Scipy, OpenCV, TensorFlow, Keras, Teachable Machine

# Appliance Fault Detector

Link: https://github.com/inder-dev-pro/GreenWave

## 1. Core Technology Stack

### Primary Technologies
- **Streamlit**: Web application framework
- **Python**: Programming language (3.x)
- **Pandas**: Data manipulation library
- **NumPy**: Numerical computing library
- **SciPy**: Scientific computing library

## 2. Algorithms and Methods

### ChangeFinder Algorithm
- **Purpose**: Anomaly and change-point detection
- **Library**: `changefinder`
- **Implementation Details**:
  - Uses SDAR (Singular Spectrum Transformation) model
  - Real-time outlier detection capabilities
  - Sequential change-point detection

### Parameters
```python
ChangeFinder(r=0.01, order=1, smooth=10)
```
- `r`: Forgetting factor (0.01)
- `order`: AR model order (1)
- `smooth`: Smoothing window size (10)

### Statistical Methods
- **IQR-based Outlier Detection**:
  ```python
  ch_score_q1 = stats.scoreatpercentile(ch_df['change_score'], 25)
  ch_score_q3 = stats.scoreatpercentile(ch_df['change_score'], 75)
  iqr = ch_score_q3 - ch_score_q1
  ```

- **Threshold Calculations**:
  - Upper: `Q3 + (3 × IQR)`
  - Lower: `Q1 - (3 × IQR)`

## 3. Data Processing Techniques

### Time Series Processing
- Daily resampling: `resample('D').mean()`
- Moving average smoothing
- Datetime conversion
- Column aggregation

### Fault Detection Logic
```python
# Overconsumption check
if last_power > avg_power * 1.5:
    status = "⚠️ Overconsumption Issue"
# Underperformance check
elif last_power < avg_power * 0.5:
    status = "❌ Possible Malfunction"
```

## 4. Performance Optimizations
- Efficient data resampling
- Vectorized operations using NumPy
- Optimized pandas operations
- Streamlined memory usage


# Waste Sorter

Link: https://github.com/PrantikM/wastesorter

## Introduction

This project uses machine learning to classify and sort waste into different categories. It aims to help improve waste management by automating the sorting process. The model was trained using images of different waste types and can classify them accurately with the help of TensorFlow and Keras.

## Project Setup

To set up the project, you will need to have **Python** and the necessary dependencies installed. Follow the steps below to install everything and run the project.

## Dependencies

- **Python 3.7** (important)
- **TensorFlow 2.4** 
- **Keras 2.4** 
- **OpenCV** (for image processing)
- **protobuf 3.20.x** (for compatibility with TensorFlow)

# GreenWave Chatbot

Link: https://github.com/PrantikM/greenwave_chatbot


## Introduction

GreenWave Chatbot is a simple yet effective way to encourage individuals to adopt green practices. It provides users with suggestions, advice, and resources to help them take steps toward sustainability. The chatbot uses **Groq** to generate natural language responses and **Streamlit** for creating an interactive web-based interface.

The main goal of GreenWave is to raise awareness about eco-friendly habits and provide practical solutions for everyday actions that contribute to a greener planet.

## Project Setup

To set up the GreenWave Chatbot on your local machine, you'll need to install Python and the necessary dependencies. Follow the steps below to get started.

## Dependencies

- **Python 3.9 or higher**
- **Streamlit** (for building the web interface)
- **Groq** (for generating responses using AI)
