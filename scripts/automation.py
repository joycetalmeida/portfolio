import argparse
import json
from datetime import datetime, timezone
from pathlib import Path


def str_to_bool(value: str) -> bool:
    return value.strip().lower() in {"1", "true", "yes", "y", "on"}


def run_automation(dry_run: bool) -> dict:
    now_utc = datetime.now(timezone.utc).isoformat()

    # Implement your real automation logic here.
    result = {
        "status": "success",
        "dry_run": dry_run,
        "executed_at_utc": now_utc,
        "message": "Automation executed successfully.",
    }
    return result


def write_report(data: dict, output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(data, indent=2), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Run sample automation.")
    parser.add_argument("--dry-run", default="false", help="Run without real changes")
    parser.add_argument("--output", default="artifacts/report.json", help="Output path for the report")
    args = parser.parse_args()

    dry_run = str_to_bool(args.dry_run)
    result = run_automation(dry_run=dry_run)

    output_path = Path(args.output)
    write_report(result, output_path)

    print(f"Report generated at: {output_path}")
    print(json.dumps(result, indent=2))


if __name__ == "__main__":
    main()
