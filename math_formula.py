import requests

def get_math_formula(user_choice):
    prompt = {
        "modelUri" : "gpt://b1g9rmc6m8ib0tre1p6v/yandexgpt-lite",
        "completionOptions": {
            "stream": False,
            "temperature": 0.6,
            "maxTokens": "2000"
        },

        "messages": [
            {
                "role": "system",
                "text": "Моя задача - отвечать на все математические формулы, которые отправляет пользователь, сообщением, которое будет включать только эту формулу написанную при помощи LaTeX, формула будет заключена между знаками доллара. В моём сообщении не будет не единого символа, кроме самой формулой. Если пользователь отправит сообщение без математической формулы, я отвечу пустым сообщением"
            },
            {
                "role": "user",
                "text": "Привет! Я бы хотел получить формулу LaTex исходя из написанной мной формулы"
            },
            {
                "role": "assistant",
                "text": "Я помогу написать формулу LaTeX и ничего больше! В моём сообщении не будет ничего кроме формулы"
            },
            {
                "role": "user",
                "text": "Напиши только формулу. В твоём запросе не должно быть никаких слов кроме latex формулы заключённой в два знака доллара" + user_choice
            }
        ]

    }

    url = "https://llm.api.cloud.yandex.net/foundationModels/v1/completion"
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Api-Key AQVNxKNywLFeeNlFU8Ml1bf5zkXDhsVwUEAEfkzp"
    }

    response = requests.post(url, headers=headers, json=prompt)

    if response.status_code == 200:
        response_dict = response.json()
        alternatives = response_dict['result']['alternatives']
        if alternatives:
            answer = alternatives[0]['message']['text']
            return answer
        else:
            return "В ответе нет альтернатив"
    else:
        return f"Ошибка: {response.status_code}"