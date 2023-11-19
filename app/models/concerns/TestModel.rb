class TestModel
    include Mongoid::Document
    include Mongoid::Timestamps
  
    field :field1, type: String
    field :field2, type: Integer
    # Add more fields as needed
  
    validates :field1, presence: true
    validates :field2, numericality: { only_integer: true }
  end
  