import json

def suggest_patterns(category=None):
    with open("docs/index.json") as f:
        patterns = json.load(f)
    for pattern in patterns:
        if category is None or pattern["category"] == category:
            print(f"- {pattern['name']}") ({pattern['category']})

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--category",
        help="e.g., resilience, scalability")
        args = parser.parse_args()
    suggest_patterns(args.category)

    