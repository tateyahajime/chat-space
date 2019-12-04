## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Colum|Type|Options|
|-----|----|-------|
|name|stiring|null: false, add_index: true|
|mail|stiring|null: false, unique: true|

### Association
- has_many :messages
- has_many :groups, through: users_groups

## messagesテーブル

|Colum|Type|Options|
|-----|----|-------|
|body|text|
|text|string|
|image|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Colum|Type|Options|
|-----|----|-------|
|group_text|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :users, through: users_groups

## users_groupsテーブル

|Colum|Type|Options|
|-----|----|-------|
|uses_id|integer|unique: true|
|groups_id|integer|unique: true|
