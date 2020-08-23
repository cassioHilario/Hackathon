using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace plugApi.Models
{
    public class ContainerItem
    {
        [Key]
        public string cod_iso { get; set; }
        public DateTime plug_in { get; set; }
        public DateTime plug_out { get; set; }
        public float consumo_final { get; set; }

    }
}
