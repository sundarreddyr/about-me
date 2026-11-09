"""Tie every entry-page CSS/JS reference and local CSS import to its content."""
import hashlib
from pathlib import Path
import re
import sys
root = Path(__file__).resolve().parents[1] / 'dist'
check = '--check' in sys.argv

def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()[:12]

def update(path, pattern, replace):
    before = path.read_text()
    after = re.sub(pattern, replace, before)
    if check:
        assert before == after, f'Stale asset version in {path.name}; run python3 scripts/version_assets.py'
    elif before != after:
        path.write_text(after)

update(root/'style.css', r"url\('illustrations\.css(?:\?v=[^']*)?'\)", lambda m: "url('illustrations.css?v="+digest(root/'illustrations.css')+"')")
for page in root.glob('*.html'):
    update(page, r'(?P<attr>src|href)="(?P<name>[\w-]+\.(?:css|js))(?:\?v=[^" ]*)?"',
        lambda m: m['attr']+'="'+m['name']+'?v='+digest(root/m['name'])+'"')
print('Asset content versions verified.' if check else 'Asset content versions updated.')
