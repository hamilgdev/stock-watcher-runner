# 🕰️ Stock Watcher Runner

StockWatcher is a tool that monitors product availability online and notifies you when items are back in stock, so you never miss the chance to get them.

## 📜 System Requirements

To run StockWatcher, make sure you have the following requirements on your system:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## 🗃️ Environment Setup

You can use the `.env.template` file to create your `.env` file. This file is used to set the environment variables.

## 🚀 Running the Application

To run the StockWatcher app, follow these steps:

1. Clone the repository:

```bash
git clone
```

2. Navigate to the project directory:

```bash
cd stock-watcher-runner
```

3. Install the dependencies:

```bash
npm install
```

4. Start the application:

```bash
npm start
```

5. The app will start running and check the product availability at the specified time intervals.
6. You will receive a notification via WhatsApp or SMS when the product is back in stock.
7. To stop the app, press `Ctrl + C`.

## 🛠️ Technologies Used

- **Node.js**: The runtime environment for the app’s backend.
- **Puppeteer**: Used for web scraping the product page in headless mode.
- **Twilio API**: Used to send availability notifications via WhatsApp or SMS.
- **node-cron**: Schedules automated tasks at specified time intervals.

### 📦 Key npm Packages

- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.
- [node-cron](https://www.npmjs.com/package/node-cron): A library for scheduling cron tasks in Node.js.
- [twilio](https://www.npmjs.com/package/twilio): Twilio API for sending notifications through WhatsApp or SMS.
- [puppeteer](http://npmjs.com/package/puppeteer): Allows interaction and data extraction from web pages in headless mode.

## 📖 Project Structure

```bash
stock-watcher-runner/
├── config/
│   └── env.config.js           # Configuration file for the app
│   └── scrapper.js             # Configuration file for Playwright
│   └── sender.js               # Configuration file for Twilio
├── helpers/
│   └── check-availability.js   # Function to check product availability
├── notifications/
│   └── send-whatsapp-notification.js   # Function to send WhatsApp notifications
├── .env                         # Environment variables file
├── main.js                      # Main file where the cron job is scheduled
└── README.md                    # Project documentation
```

## 🤖 Cron Job Configuration

StockWatcher comes with a cron job set up to check the product's availability at specific times. You can configure the cron job by setting the `CRON_SCHEDULE_TIME` environment variable in the `.env` file.

```bash
CRON_SCHEDULE_TIME='*/3 * * * *' # Runs every 3 minutes
```

## 📝 Usage Notes

- Make sure to set up the `.env` file with the required environment variables.
- **Interval Adjustment**: You can change the check frequency by modifying the cron expression in CRON_SCHEDULE_TIME.
- **Headless Mode**: Playwright is configured in headless mode to improve performance in production environments. Usin `NODE_ENV=production` will enable headless mode.
