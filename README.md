# 맛집 노트 사이트 설정 가이드

## 1. Supabase 프로젝트 만들기 (무료)
1. https://supabase.com 에서 회원가입 후 "New Project" 생성
2. 프로젝트가 만들어지면 왼쪽 메뉴 **SQL Editor** 로 이동해서 아래 SQL을 실행

```sql
create table restaurants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  address text,
  rating int,
  note text,
  created_at timestamp with time zone default now()
);

alter table restaurants enable row level security;

create policy "public can read"
  on restaurants for select
  using (true);

create policy "authenticated can insert"
  on restaurants for insert
  with check (auth.role() = 'authenticated');

create policy "authenticated can update"
  on restaurants for update
  using (auth.role() = 'authenticated');

create policy "authenticated can delete"
  on restaurants for delete
  using (auth.role() = 'authenticated');
```

## 2. 관리자 계정 만들기
1. 왼쪽 메뉴 **Authentication → Providers** 에서 Email이 켜져 있는지 확인
2. **Authentication → Settings** 에서 "Allow new users to sign up"을 꺼두기 (본인만 로그인하도록)
3. **Authentication → Users → Add user** 에서 본인 이메일/비밀번호로 계정 하나 생성
   - 이 계정으로 admin.html에서 로그인하게 됩니다.

## 3. 접속 정보 연결하기
1. **Project Settings → API** 로 이동
2. `Project URL` 과 `anon public` 키를 복사
3. 이 폴더의 `app-config.js` 파일을 열어서 아래 두 줄을 본인 값으로 교체

```js
const SUPABASE_URL = "여기에 Project URL";
const SUPABASE_ANON_KEY = "여기에 anon public 키";
```

## 4. GitHub에 올리기
1. GitHub에서 새 저장소 생성 (예: mat-jip-site)
2. 이 폴더 전체(index.html, admin.html, style.css, app-config.js, README.md)를 저장소에 업로드/커밋

## 5. Vercel로 무료 배포하기
1. https://vercel.com 에서 GitHub 계정으로 로그인
2. "Add New... → Project" 에서 방금 만든 저장소 선택
3. Framework Preset은 "Other"로 두고 그대로 Deploy
4. 몇 초 후 `https://프로젝트이름.vercel.app` 주소로 사이트가 열립니다

## 6. 사용 방법
- `/` (index.html): 누구나 볼 수 있는 맛집 리스트, 검색과 카테고리 필터 가능
- `/admin.html`: 본인 계정으로 로그인해서 맛집 추가·수정·삭제
- 맛집을 추가하면 바로 index.html에 반영됩니다 (코드 수정이나 재배포 필요 없음)

## 나중에 코드를 고치고 싶다면
GitHub에서 파일을 수정하고 커밋하면 Vercel이 자동으로 재배포합니다.
