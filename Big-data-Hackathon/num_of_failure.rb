require 'csv'    
require 'date'

def euc(set1, set2)
  Math.sqrt(set1.zip(set2).map { |x| (x[1].to_f - x[0].to_f)**2 }.reduce(:+))
end

csv_text = File.read('/home/maboelnour/datasets/Water-data/Final_18.csv')
csv = CSV.parse(csv_text, :headers => false).to_a[1..-1]

csv.group_by do |b|
  [b[2], b[1], b[4]]
end

csv.each do |row|

  break_date = Date.strptime(row[13],  "%m/%d/%Y")

  prev_breaks = csv.select do |i|
    begin
    prev_break_date =  Date.strptime(i[13],  "%m/%d/%Y")
  rescue
    puts i[13]
  end
    eucl = euc([row[18],row[19]],[i[18],i[19]])
    row[2] == i[2] && row[1] == i[1] && row[4] == i[4] && eucl <= 750 && eucl > 0 && break_date > prev_break_date
  end.sort_by{|x| Date.strptime(x[13], "%m/%d/%Y")}

  # puts prev_breaks.count
  # puts "#{row[18]} -> #{row[19]}"  
  # puts prev_breaks.map { |e| [e[18],e[19]]  }
  # puts "==="

  
  x = if prev_breaks.size == 0
     (break_date - Date.strptime("1/1/#{row[4]}", "%m/%d/%Y") ).to_i
  else
     (break_date - Date.strptime(prev_breaks.last[13],  "%m/%d/%Y")).to_i
  end
  
  puts x
  # puts x
  # puts "-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-"
end
