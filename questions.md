# Questions
- 2025-01-03 04:12 In Temporal, should the ANARCI subprocess run as a which version is best at running ANARCI?
- 2025-01-03 04:13 Does a Python Temporal worker run in a single asyncio event loop? If so, does it take multiple tasks under the same event loop?:
    - 2025-01-03 04:14:
        - Yes, a Python SDK Worker uses a single event loop.


# Answers
- 2025-01-03 04:12 In Temporal, how can I query the number of available worker slots?:
    - 2025-01-03 04:13:
        - Temporal emits metrics on worker slots.
        - Set up a Prometheus runtime and expose a port when instantiating a Temporal Client.
        - Then configure prometheus to scrape metrics from that port.
