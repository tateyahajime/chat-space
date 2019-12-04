## usersテーブル

|Colum|Type|Options|
|-----|----|-------|
|name|string|null: false, add_index: true|
|mail|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :groups, through: users_groups
- has_many :users_groups

## messagesテーブル

|Colum|Type|Options|
|-----|----|-------|
|body|text|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル

|Colum|Type|Options|
|-----|----|-------|
|group_name|string|null: false, unique: true|

### Association
- has_many :messages
- has_many :users, through: users_groups
- has_many :users_groups

## users_groupsテーブル

|Colum|Type|Options|
|-----|----|-------|
|uses_id|integer|null: false, foreign: true|
|groups_id|integer|null: foreign_key: true|

### Association
- belongs_to user
- belongs_to group
