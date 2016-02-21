class Todo < ActiveRecord::Base
	validates :description, presence: true
	validates :done, :inclusion => {:in => [true, false]}
end
